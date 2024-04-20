export enum PromptService {
  ChatQwenAICompletion = 'ChatQwenAICompletion',
  ChatTongyiCompletion = 'ChatTongyiCompletion',
  OpenAIChatCompletion = "OpenAIChatCompletion",
  AzureOpenAIChatCompletion = "AzureOpenAIChatCompletion",
  AnthropicCompletion = "AnthropicCompletion"
}

export enum Provider {
  QwenAI = "QwenAI",
  Tongyi = "Tongyi",
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
