export enum PromptService {
  ChatQwenAICompletion = 'ChatQwenAICompletion',
  ChatTongyiCompletion = 'ChatTongyiCompletion',
  ChatZhipuAICompletion = 'ChatZhipuAICompletion',
  ChatQianfanCompletion = 'ChatQianfanCompletion',
  OpenAIChatCompletion = "OpenAIChatCompletion",
  AzureOpenAIChatCompletion = "AzureOpenAIChatCompletion",
  AnthropicCompletion = "AnthropicCompletion"
}

export enum Provider {
  QwenAI = "QwenAI",
  Tongyi = "Tongyi",
  ZhipuAI = "ZhipuAI",
  Qianfan = 'Qianfan',
  OpenAI = "OpenAI",
  Azure = "Azure",
  Anthropic = "Anthropic",
}

export const providerDetails = {
  [Provider.QwenAI]: {
    name: "QwenAI",
  },
  [Provider.Tongyi]: {
    name: "Tongyi",
  },
  [Provider.ZhipuAI]: {
    name: "ZhipuAI",
  },
  [Provider.Qianfan]: {
    name: "Qianfan",
  },
  [Provider.OpenAI]: {
    name: "OpenAI",
  },
  [Provider.Azure]: {
    name: "Azure",
  },
  [Provider.Anthropic]: {
    name: "Anthropic",
  },
};

export const promptProvidersMapping = {
  [PromptService.ChatQwenAICompletion]: {
    name: "QwenAI Chat Completion",
    provider: Provider.QwenAI,
    defaultSettings: {},
  },
  [PromptService.ChatTongyiCompletion]: {
    name: "Tongyi Chat Completion",
    provider: Provider.Tongyi,
    defaultSettings: {},
  },
  [PromptService.ChatZhipuAICompletion]: {
    name: "ZhipuAI Chat Completion",
    provider: Provider.ZhipuAI,
    defaultSettings: {},
  },
  [PromptService.ChatQianfanCompletion]: {
    name: "Qianfan Chat Completion",
    provider: Provider.Qianfan,
    defaultSettings: {},
  },
  [PromptService.OpenAIChatCompletion]: {
    name: "OpenAI Chat Completion",
    provider: Provider.OpenAI,
    defaultSettings: {},
  },
  [PromptService.AzureOpenAIChatCompletion]: {
    name: "Azure OpenAI (Coming Soon)",
    provider: Provider.Azure,
    defaultSettings: {},
  },
  [PromptService.AnthropicCompletion]: {
    name: "Anthropic (Coming Soon)",
    provider: Provider.Anthropic,
    defaultSettings: {},
  },
};
