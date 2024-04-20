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
  frequency_penalty: 0,
  presence_penalty: 0,
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
      min: 0,
      max: 1,
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
      label: "Frequency Penalty",
      name: ["frequency_penalty"],
      type: "slider",
      min: 0,
      max: 1,
      step: 0.1,
    },
    {
      label: "Presence Penalty",
      name: ["presence_penalty"],
      type: "slider",
      min: 0,
      max: 1,
      step: 0.1,
    },
  ];
};

export const qwenAIChatCompletionSettingsDefinition: ProviderSettingsDefinition<OpenAIProviderSettings> =
  {
    defaultSettings,
    generateFormSchema,
  };
