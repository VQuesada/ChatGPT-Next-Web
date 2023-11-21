export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `https://github.com/${OWNER}/${REPO}`;
export const ISSUE_URL = `https://github.com/${OWNER}/${REPO}/issues`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const RELEASE_URL = `${REPO_URL}/releases`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export const DEFAULT_CORS_HOST = "https://a.nextweb.fun";
export const DEFAULT_API_HOST = `${DEFAULT_CORS_HOST}/api/proxy`;
export const OPENAI_BASE_URL = "https://api.openai.com";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
  Auth = "/auth",
}

export enum ApiPath {
  Cors = "/api/cors",
  OpenAI = "/api/openai",
}

export enum SlotID {
  AppBody = "app-body",
  CustomModel = "custom-model",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
  Sync = "sync",
}

export const DEFAULT_SIDEBAR_WIDTH = 300;
export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "nk-";

export const LAST_INPUT_KEY = "last-input";
export const UNFINISHED_INPUT = (id: string) => "unfinished-input-" + id;

export const STORAGE_KEY = "chatgpt-next-web";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";

export enum ServiceProvider {
  OpenAI = "OpenAI",
  Azure = "Azure",
}

export const OpenaiPath = {
  ChatPath: "v1/chat/completions",
  UsagePath: "dashboard/billing/usage",
  SubsPath: "dashboard/billing/subscription",
  ListModelPath: "v1/models",
};

export const Azure = {
  ExampleEndpoint: "https://{resource-url}/openai/deployments/{deploy-id}",
};

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`; // input / time / model / lang
export const DEFAULT_SYSTEM_TEMPLATE = `
You are ChatGPT, a large language model trained by OpenAI.
Knowledge cutoff: {{cutoff}}
Current model: {{model}}
Current time: {{time}}
Latex inline: $x^2$ 
Latex block: $$e=mc^2$$
`;

export const AVAILABLE_MODELS = {
  GPT_4: "gpt-4",
  GPT_4_0314: "gpt-4-0314",
  GPT_4_0613: "gpt-4-0613",
  GPT_4_32K: "gpt-4-32k",
  GPT_4_32K_0314: "gpt-4-32k-0314",
  GPT_4_32K_0613: "gpt-4-32k-0613",
  GPT_4_1106_PREVIEW: "gpt-4-1106-preview",
  GPT_4_VISION_PREVIEW: "gpt-4-vision-preview",
  GPT_3_5_TURBO: "gpt-3.5-turbo",
  GPT_3_5_TURBO_0301: "gpt-3.5-turbo-0301",
  GPT_3_5_TURBO_0613: "gpt-3.5-turbo-0613",
  GPT_3_5_TURBO_1106: "gpt-3.5-turbo-1106",
  GPT_3_5_TURBO_16K: "gpt-3.5-turbo-16k",
  GPT_3_5_TURBO_16K_0613: "gpt-3.5-turbo-16k-0613",
};

export const SUMMARIZE_MODEL = AVAILABLE_MODELS.GPT_4_1106_PREVIEW;

export const KnowledgeCutOffDate: Record<string, string> = {
  default: "2021-09",
  [AVAILABLE_MODELS.GPT_4_1106_PREVIEW]: "2023-04",
  [AVAILABLE_MODELS.GPT_4_VISION_PREVIEW]: "2023-04",
};

export const DEFAULT_MODELS = [
  {
    name: AVAILABLE_MODELS.GPT_4,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_4_0314,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO_0613,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_4_32K,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_4_32K_0314,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_4_32K_0613,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_4_1106_PREVIEW,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_4_VISION_PREVIEW,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO_0301,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO_0613,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO_1106,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO_16K,
    available: true,
  },
  {
    name: AVAILABLE_MODELS.GPT_3_5_TURBO_16K_0613,
    available: true,
  },
] as const;

export const CHAT_PAGE_SIZE = 15;
export const MAX_RENDER_MSG_COUNT = 45;
