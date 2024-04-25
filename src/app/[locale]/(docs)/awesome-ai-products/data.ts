import { ResourceItem } from "@/lib/data_types";


type dataType = {
  category: string
  items: ResourceItem[]
}[]

export const data: dataType = [
  {
    category: "llm-global",
    items: [
      { id: "chatgpt", name: "ChatGPT", url: "https://chat.openai.com" },
      { id: "gemini", name: "Gemini", url: "https://gemini.google.com/" },
      { id: "claude", name: "Claude", url: "https://claude.ai/" },
      { id: "mistral", name: "Mistral", url: "https://chat.mistral.ai/" },
      {
        id: "llama-hugging-face-space",
        name: "Llama (Hugging Face Space)",
        url: "https://huggingface.co/spaces/huggingface-projects/llama-2-13b-chat",
      },
      {
        id: "grok-ai",
        name: "Grok xAI",
        url: "https://grok.x.ai/",
      },
    ],
  },
  {
    category: "llm-chinese",
    items: [
      {
        id: "zhi-pu-qing-yan",
        name: "智谱清言",
        url: "https://chatglm.cn/main/detail?fr=zjh",
      },
      { id: "dou-bao", name: "豆包", url: "https://www.doubao.com/" },
      { id: "xing-huo", name: "星火", url: "https://xinghuo.xfyun.cn/" },
      { id: "kimi", name: "Kimi", url: "https://kimi.moonshot.cn/" },
      { id: "coze", name: "Coze", url: "https://www.coze.cn/" },
      { id: "bai-chuan", name: "百川", url: "https://www.baichuan-ai.com/" },
      {
        id: "wen-xin-yi-yan",
        name: "文心一言",
        url: "https://yiyan.baidu.com/",
      },
      {
        id: "tong-yi-qian-wen",
        name: "通义千问",
        url: "https://tongyi.aliyun.com/",
      },
      { id: "hun-yuan", name: "混元", url: "https://hunyuan.tencent.com/bot" },
      { id: "shang-liang", name: "商量", url: "https://chat.sensetime.com/" },
      { id: "yue-wen", name: "跃问", url: "https://stepchat.cn/" },
      { id: "wan-zhi", name: "万知", url: "https://wanzhi.com/" },
      {
        id: "dify",
        name: "Dify",
        url: "https://dify.ai/",
      },
    ],
  },
  {
    category: "search",
    items: [
      {
        id: "perplexity",
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
      },
      {
        id: "mi-ta-ai-sou-suo",
        name: "秘塔 AI 搜索",
        url: "https://metaso.cn/",
      },
      {
        id: "globe-explorer",
        name: "Globe Explorer",
        url: "https://explorer.globe.engineer/",
      },
      {
        id: "tian-gong-ai",
        name: "天工 AI",
        url: "https://search.tiangong.cn/",
      },
      {
        id: "devv-ai",
        name: "Devv AI",
        url: "https://devv.ai/",
      },
    ],
  },
  {
    category: "image",
    items: [
      {
        id: "dall-e-copilot-designer",
        name: "DALL-E (Copilot Designer)",
        url: "https://copilot.microsoft.com/images/create",
      },
      {
        id: "midjourney",
        name: "Midjourney",
        url: "https://www.midjourney.com/",
      },
      {
        id: "dreamstudio",
        name: "DreamStudio",
        url: "https://dreamstudio.ai/",
      },
      { id: "clipdrop", name: "Clipdrop", url: "https://clipdrop.co/" },
      {
        id: "krea-ai",
        name: "Krea.ai",
        url: "https://www.krea.ai/apps/image/realtime",
      },
      {
        id: "freepic-pikaso",
        name: "Freepic Pikaso",
        url: "https://freepik.com/pikaso",
      },
      { id: "imgpilot", name: "ImgPilot", url: "https://www.imgpilot.com/" },
      {
        id: "latent-consistency-fal-ai",
        name: "Latent Consistency (Fal.ai)",
        url: "https://fal.ai/dynamic",
      },
      {
        id: "blockadelabs",
        name: "Blockadelabs",
        url: "https://www.blockadelabs.com/",
      },
      {
        id: "deep-dream-generator",
        name: "Deep Dream Generator",
        url: "https://deepdreamgenerator.com/",
      },
      { id: "magnific", name: "Magnific", url: "https://magnific.ai/" },
      { id: "civitai", name: "Civitai", url: "https://civitai.com/" },
      { id: "openart", name: "OpenArt", url: "https://openart.ai/" },
      { id: "liblibai", name: "LibLibAI", url: "https://www.liblib.ai/" },
      { id: "vega-ai", name: "Vega AI", url: "https://www.vegaai.net/" },
      { id: "wu-jie-ai", name: "Wujie AI", url: "https://www.wujieai.com/" },
      {
        id: "dreamina",
        name: "Dreamina",
        url: "https://www.capcut.cn/ai-tool/platform",
      },
      {
        id: "firefly",
        name: "Firefly",
        url: "https://www.adobe.com/products/firefly.html",
      },
      { id: "gemini", name: "Gemini", url: "https://gemini.google.com/" },
      { id: "diffus", name: "Diffus", url: "https://www.diffus.me/" },
      { id: 'code-former', name: 'Code Former', url: 'https://huggingface.co/spaces/sczhou/CodeFormer', iconType: 'svg' },
      { id: 'lexica', name: 'Lexica', url: 'https://lexica.art/', iconType: 'png' },
      { id: 'leonardo', name: 'Leonardo', url: 'https://leonardo.ai/', iconType: 'svg' },
    ],
  },
  {
    category: "video",
    items: [
      { id: "sora", name: "Sora", url: "https://openai.com/sora" },
      { id: "runway", name: "Runway", url: "https://app.runwayml.com/" },
      { id: "morph", name: "Morph Studio", url: "https://morphstudio.com/" },
      { id: "pika", name: "Pika", url: "https://pika.art/" },
      { id: "pixverse", name: "Pixverse", url: "https://pixverse.ai/" },
      { id: "moonvalley", name: "Moonvalley", url: "https://moonvalley.ai/" },
      { id: "mootion", name: "Mootion", url: "https://mootion.com/" },
      { id: "domo-ai", name: "Domo AI", url: "https://domoai.app/" },
      {
        id: "stable-video-diffusion-fal-ai",
        name: "Stable Video Diffusion (Fal.ai)",
        url: "https://www.fal.ai/models/svd",
      },
      {
        id: "stable-video-diffusion-replicate",
        name: "Stable Video Diffusion (replicate)",
        url: "https://replicate.com/stability-ai/stable-video-diffusion",
      },
      {
        id: "animatediff-replicate",
        name: "AnimateDiff (replicate)",
        url: "https://replicate.com/lucataco/animate-diff",
      },
      { id: "kaiber", name: "Kaiber", url: "https://kaiber.ai/" },
      {
        id: "jian-ying-dreamina",
        name: "剪映 Dreamina",
        url: "https://www.capcut.cn/ai-tool/",
      },
      { id: "du-jia", name: "度加", url: "https://aigc.baidu.com/" },
      { id: 'viggle', name: 'Viggle', url: 'https://viggle.ai/', iconType: 'ico' },
    ],
  },
  {
    category: "music",
    items: [
      { id: "udio", name: "udio", url: "https://udio.com/" },
      { id: "suno", name: "SUNO", url: "https://app.suno.ai/" },
      {
        id: "stable-audio",
        name: "Stable Audio",
        url: "https://www.stableaudio.com/",
      },
      { id: "mubert", name: "Mubert", url: "https://mubert.com/" },
      {
        id: "kou-dai-yue-dui-app",
        name: "口袋乐队 app",
        url: "https://apps.apple.com/cn/app/%E5%8F%A3%E8%A2%8B%E4%B9%90%E9%98%9F-%E9%9F%B3%E4%B9%90%E5%88%B6%E4%BD%9C-%E5%94%B1%E6%AD%8C%E7%BC%96%E6%9B%B2-%E4%B9%90%E5%99%A8%E4%BC%B4%E5%A5%8F/id1603380354",
      },
      {
        id: "he-xian-pai-app",
        name: "和弦派 app",
        url: "https://www.lazycomposer.com/introduce",
      },
      {
        id: "x-studio",
        name: "X Studio",
        url: "https://xstudio.music.163.com/",
      },
      {
        id: "ace-studio",
        name: "ACE Studio",
        url: "https://ace-studio.timedomain.cn/",
      },
      {
        id: "wang-yi-tian-yin",
        name: "网易天音",
        url: "https://tianyin.163.com/",
      },
      { id: "aiva", name: "AIVA", url: "https://aiva.ai/" },
    ],
  },
  {
    category: "voice",
    items: [
      { id: "elevenlabs", name: "ElevenLabs", url: "https://elevenlabs.io/" },
      {
        id: "xun-fei-zhi-zuo",
        name: "讯飞智作",
        url: "https://peiyin.xunfei.cn/",
      },
      {
        id: "jian-ying-ai-ke-lun-yin-se",
        name: "剪映 AI 克隆音色",
        url: "https://mp.weixin.qq.com/s/nHIPaq4evPbvSQS1ctYZrA",
      },
      {
        id: "zi-jie-huo-shan-yin",
        name: "字节火山语音",
        url: "https://www.volcengine.com/product/tts",
      },
      {
        id: "wei-ruan-yu-yin",
        name: "微软语音",
        url: "https://azure.microsoft.com/zh-cn/products/ai-services/text-to-speech/",
      },
      {
        id: "openai-voice-engine",
        name: "OpenAI Voice Engine",
        url: "https://openai.com/blog/navigating-the-challenges-and-opportunities-of-synthetic-voices",
      },
      {
        id: "da-bing-ai-bian-sheng",
        name: "大饼 AI 变声",
        url: "https://dubbing.tech/",
      },
    ],
  },
  {
    category: "digital-human",
    items: [
      { id: "heygen", name: "HeyGen", url: "https://www.heygen.com/" },
      { id: "raskai", name: "RaskAI", url: "https://www.rask.ai/" },
      { id: "d-id", name: "D-iD", url: "https://studio.d-id.com/" },
      {
        id: "xun-fei-zhi-zuo",
        name: "讯飞智作",
        url: "https://peiyin.xunfei.cn/virtual-broadcasting",
      },
      {
        id: "shang-tang-ru-ying",
        name: "商汤如影",
        url: "http://senseavatar.sensetime.com/",
      },
      { id: "synthesia", name: "Synthesia", url: "https://www.synthesia.io/" },
      { id: "kalidoface", name: "Kalidoface", url: "https://kalidoface.com/" },
    ],
  },
  {
    category: "3d",
    items: [
      { id: "tripo3d", name: "Tripo3D", url: "https://www.tripo3d.ai/" },
      { id: "meshy-ai", name: "Meshy AI", url: "https://www.meshy.ai/" },
      {
        id: "artefacts-ai",
        name: "Artefacts AI",
        url: "https://artefacts.ai/",
      },
      { id: "csm-ai", name: "CSM AI", url: "https://www.csm.ai/" },
      { id: "3dfy-ai", name: "3DFY AI", url: "https://3dfy.ai/" },
      {
        id: "luma-ai",
        name: "Luma AI",
        url: "https://captures.lumalabs.ai/imagine",
      },
      { id: "spline-ai", name: "Spline AI", url: "https://spline.design/ai" },
    ],
  },
  {
    category: "design",
    items: [
      { id: "tome", name: "Tome", url: "https://beta.tome.app/" },
      { id: "gamma", name: "Gamma", url: "https://gamma.app/" },
      {
        id: "beautiful-ai",
        name: "Beautiful.ai",
        url: "https://www.beautiful.ai/",
      },
      { id: "wan-zhi", name: "万知", url: "https://wanzhi.com/" },
      { id: "canva", name: "Canva", url: "https://www.canva.com/" },
    ],
  },
  {
    category: "programming",
    items: [
      { id: "cursor", name: "Cursor", url: "https://cursor.sh/" },
    ],
  },
];

export default data;
