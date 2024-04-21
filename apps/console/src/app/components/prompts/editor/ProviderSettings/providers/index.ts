import { PromptService } from "../../../../../../@generated/graphql/graphql";
import { azureOpenAIChatCompletionSettingsDefinition } from "./azure-openai-chat-completion";
import { openAIChatCompletionSettingsDefinition } from "./openai-chat-completion";
import { qwenAIChatCompletionSettingsDefinition } from "./qwenai-chat-completion";
import { tongyiChatCompletionSettingsDefinition } from "./tongyi-chat-completion";
import { zhipuAIChatCompletionSettingsDefinition } from "./zhipuai-chat-completion";
import { qianfanChatCompletionSettingsDefinition } from "./qianfan-chat-completion";

const defaultSettingsMap = {
  [PromptService.ChatQwenAICompletion]:
    qwenAIChatCompletionSettingsDefinition.defaultSettings,
  [PromptService.ChatTongyiCompletion]:
    tongyiChatCompletionSettingsDefinition.defaultSettings,
  [PromptService.ChatZhipuAICompletion]:
    zhipuAIChatCompletionSettingsDefinition.defaultSettings,
  [PromptService.ChatQianfanCompletion]:
    qianfanChatCompletionSettingsDefinition.defaultSettings,
  [PromptService.OpenAiChatCompletion]:
    openAIChatCompletionSettingsDefinition.defaultSettings,
  [PromptService.AzureOpenAiChatCompletion]:
    azureOpenAIChatCompletionSettingsDefinition.defaultSettings,
};

export const getServiceDefaultSettings = (service: PromptService) => {
  return defaultSettingsMap[service];
};
