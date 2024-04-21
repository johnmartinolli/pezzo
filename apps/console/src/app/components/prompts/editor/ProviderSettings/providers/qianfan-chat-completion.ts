import OpenAI from "openai";
import { FormSchema, ProviderSettingsDefinition } from "../types";

type OpenAIProviderSettings = Omit<
  OpenAI.Chat.Completions.CompletionCreateParams,
  "messages"
>;

const defaultSettings: OpenAIProviderSettings = {
  model: "ERNIE-4.0-8K",
  temperature: 0.7,
  top_p: 1,
};

const generateFormSchema = (settings: OpenAIProviderSettings): FormSchema => {
  const getMaxResponseTokensMaxValue = () => {
    switch (settings.model) {
      case "ERNIE-4.0-8K":
        return 8192;
      case "ERNIE-3.5-8K":
        return 8192;
      case "ERNIE-Speed-8K":
        return 8192;
      case "ERNIE-Character-8K-0321":
        return 8192;
      case "ERNIE-Functions-8K-0321":
        return 8192;
      case "ERNIE-Speed-AppBuilder-8K-0322":
        return 8192;
      case "Yi-34B-Chat":
        return 1500;
      case "Mixtral-8x7B-Instruct":
        return 2000;
      case "chatglm3-6b-32k":
        return 2000;
      case "Baichuan2-13B-Chat":
        return 2000;
      case "SQLCoder-7B":
        return 2000;
    }
  };

  return [
    {
      label: "Model",
      name: ["model"],
      type: "select",
      options: [
        { value: "ERNIE-4.0-8K", label: "ERNIE-4.0-8K" },
        { value: "ERNIE-3.5-8K", label: "ERNIE-3.5-8K" },
        { value: "ERNIE-Speed-8K", label: "ERNIE-Speed-8K" },
        { value: "ERNIE-Character-8K-0321", label: "ERNIE-Character-8K-0321" },
        { value: "ERNIE-Functions-8K-0321", label: "ERNIE-Functions-8K-0321" },
        { value: "ERNIE-Speed-AppBuilder-8K-0322", label: "ERNIE-Speed-AppBuilder-8K-0322" },
        { value: "Mixtral-8x7B-Instruct", label: "Mixtral-8x7B-Instruct" },
        { value: "chatglm3-6b-32k", label: "chatglm3-6b-32k" },
        { value: "Baichuan2-13B-Chat", label: "Baichuan2-13B-Chat" },
        { value: "SQLCoder-7B", label: "SQLCoder-7B" },
      ],
    },
    {
      label: "Temperature",
      name: ["temperature"],
      type: "slider",
      min: 0.1,
      max: 1,
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
      min: 0.1,
      max: 0.9,
      step: 0.1,
    },
    {
      label: "Penalty Score",
      name: ["penalty_score"],
      type: "slider",
      min: 1.0,
      max: 2.0,
      step: 0.1,
    },
    {
      label: "Disable Search",
      name: ["disable_search"],
      type: "select",
      options: [
        { value: "True", label: "True" },
        { value: "False", label: "False" },
      ],
    },
  ];
};

export const qianfanChatCompletionSettingsDefinition: ProviderSettingsDefinition<OpenAIProviderSettings> =
  {
    defaultSettings,
    generateFormSchema,
  };
