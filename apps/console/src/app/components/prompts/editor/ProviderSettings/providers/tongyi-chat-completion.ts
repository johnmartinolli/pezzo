import OpenAI from "openai";
import { FormSchema, ProviderSettingsDefinition } from "../types";

type OpenAIProviderSettings = Omit<
  OpenAI.Chat.Completions.CompletionCreateParams,
  "messages"
>;

const defaultSettings: OpenAIProviderSettings = {
  model: "qwen1.5-32b-chat",
  temperature: 0.7,
  top_p: 1,
};

const generateFormSchema = (settings: OpenAIProviderSettings): FormSchema => {
  const getMaxResponseTokensMaxValue = () => {
    switch (settings.model) {
      case "qwen1.5-72b-chat":
        return 8192;
      case "qwen1.5-32b-chat":
        return 8192;
      case "qwen1.5-14b-chat":
        return 16384;
      case "qwen1.5-7b-chat":
        return 16384;
      case "qwen-max":
        return 2000;
      case "qwen-plus":
        return 2000;
      case "qwen-turbo":
        return 1500;
      case "qwen-max-longcontext":
        return 2000;
    }
  };

  return [
    {
      label: "Model",
      name: ["model"],
      type: "select",
      options: [
        { value: "qwen1.5-72b-chat", label: "qwen1.5-72b-chat" },
        { value: "qwen1.5-32b-chat", label: "qwen1.5-32b-chat" },
        { value: "qwen1.5-14b-chat", label: "qwen1.5-14b-chat" },
        { value: "qwen1.5-7b-chat", label: "qwen1.5-7b-chat" },
        { value: "qwen-max", label: "qwen-max" },
        { value: "qwen-plus", label: "qwen-plus" },
        { value: "qwen-turbo", label: "qwen-turbo" },
        { value: "qwen-max-longcontext", label: "qwen-max-longcontext" },
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
      label: "Seed",
      name: ["seed"],
      type: "slider",
      min: 1,
      max: 1234,
      step: 1,
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
      label: "Top K",
      name: ["top_k"],
      type: "slider",
      min: 1,
      max: 200,
      step: 0.1,
    },
    {
      label: "Request Timeout",
      name: ["request_timeout"],
      type: "slider",
      min: 2,
      max: 60,
      step: 2,
    },
    {
      label: "Repetition Penalty",
      name: ["repetition_penalty"],
      type: "slider",
      min: 0.1,
      max: 100,
      step: 1,
    },
    {
      label: "Repetition Penalty",
      name: ["enable_search"],
      type: "select",
      options: [
        { value: "True", label: "True" },
        { value: "False", label: "False" },
      ],
    },
  ];
};

export const tongyiChatCompletionSettingsDefinition: ProviderSettingsDefinition<OpenAIProviderSettings> =
  {
    defaultSettings,
    generateFormSchema,
  };
