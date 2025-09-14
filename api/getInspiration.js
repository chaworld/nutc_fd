// api/getInspiration.js

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

const allowedOrigins = [
  'https://chaworld.github.io',
  'http://127.0.0.1:5500',
  'http://localhost:5500'
];

export default async function handler(req, res) {
  // --- CORS Handling ---
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  //正確回應 Preflight Request ★★★
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return; // 直接結束，不執行後續程式碼
  }
  
  // --- Main Logic ---
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // 檢查 API Key 是否存在
    if (!GEMINI_API_KEY) {
      throw new Error("Missing GEMINI_API_KEY environment variable on Vercel.");
    }

    const { foodTypes, drinkTypes, campus } = req.body;
    
    const prompt = `身為美食搭配小助理，請從「${campus}」的「${foodTypes.join('、')}」與「${drinkTypes.join('、')}」中，隨機創造一個組合，禁止麻辣鴨血，不能與上一回相同。請給它一個 **#20字內的說明**，並用活潑語氣介紹它。開頭就說：「靈感菇哩菇哩，就決定是：」`;

    const geminiResponse = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API Error:', errorText);
      throw new Error(`Gemini API responded with status: ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "抱歉，靈感暫時枯竭了...";
    
    res.status(200).json({ text });

  } catch (error) {
    console.error('Backend handler error:', error);
    res.status(500).json({ error: '無法從 Gemini 取得回應' });
  }
}