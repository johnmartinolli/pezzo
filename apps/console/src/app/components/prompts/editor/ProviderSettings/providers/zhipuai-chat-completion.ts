import OpenAI from "openai";
import { FormSchema, ProviderSettingsDefinition } from "../types";

type OpenAIProviderSettings = Omit<
  OpenAI.Chat.Completions.CompletionCreateParams,
  "messages"
>;

const defaultSettings: OpenAIProviderSettings = {
  model: "glm-4",
  temperature: 0.5,
  max_tokens: 1024,
  top_p: 0.7,
};

const generateFormSchema = (settings: OpenAIProviderSettings): FormSchema => {
  const getMaxResponseTokensMaxValue = () => {
    switch (settings.model) {
      case "glm-4":
        return 8192;
      case "glm-3-turbo":
        return 8192;
      case "characterglm":
        return 8192;
    }
  };

  return [
    {
      label: "Model",
      name: ["model"],
      type: "select",
      options: [
        { value: "glm-4", label: "glm-4" },
        { value: "glm-3-turbo", label: "glm-3-turbo" },
        { value: "characterglm", label: "characterglm" },
      ],
    },
    {
      label: "Temperature",
      name: ["temperature"],
      type: "slider",
      min: 0.01,
      max: 0.99,
      step: 0.1,
    },
    {
      label: "Max Response Length",
      name: ["max_tokens"],
      type: "slider",
      min: 1024,
      max: getMaxResponseTokensMaxValue(),
      step: 1024,
    },
    {
      label: "Top P",
      name: ["top_p"],
      type: "slider",
      min: 0.01,
      max: 0.99,
      step: 0.1,
    },
  ];
};

export const zhipuAIChatCompletionSettingsDefinition: ProviderSettingsDefinition<OpenAIProviderSettings> =
  {
    defaultSettings,
    generateFormSchema,
  };
