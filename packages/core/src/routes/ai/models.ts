import type { RaycastAIModel } from '@ru/shared'
import { getConfig } from '../../utils/env.util'
import { COHERE_SERVICE_PROVIDERS, GEMINI_SERVICE_PROVIDERS, GROQ_SERVICE_PROVIDERS, OPENAI_SERVICE_PROVIDERS, RAYCAST_DEFAULT_GROQ_MODELS, RAYCAST_DEFAULT_MODELS, RAYCAST_GEMINI_PRO_ONLY_MODELS } from './constants'

function generateRaycastAIServiceProviders() {
  const config = getConfig('ai')
  const default_models = []
  if (config?.openai && !config?.openai?.disable) {
    default_models.push([
      ...OPENAI_SERVICE_PROVIDERS,
      ...Object.entries(getConfig('ai')?.openai?.models || {}).map(([key, value]) => {
        const capabilities: {
          [key: string]: string | undefined
        } = {}

        for (const [key, val] of Object.entries(value.capabilities || {}))
          capabilities[key] = val ? 'full' : undefined

        return ({
          id: value.id || key,
          description: value.description || '',
          model: value.model || key,
          name: value.name || key,
          provider: 'openai',
          provider_name: 'OpenAI',
          provider_brand: 'openai',
          speed: Number(value.speed) || 3,
          intelligence: Number(value.intelligence) || 3,
          capabilities,
          context: Number(value.context) || 16,
          features: ['chat', 'quick_ai', 'commands', 'api', 'emoji_search'],
          suggestions: ['chat', 'quick_ai', 'commands'],
          in_better_ai_subscription: false,
          requires_better_ai: false,
          status: value.status || null,
        } as RaycastAIModel)
      }),
    ])
  }
  if (config?.gemini && !config?.gemini?.disable)
    default_models.push(...GEMINI_SERVICE_PROVIDERS)
  if (config?.groq && !config?.groq.disable)
    default_models.push(...GROQ_SERVICE_PROVIDERS)
  if (config?.cohere && !config?.cohere.disable)
    default_models.push(...COHERE_SERVICE_PROVIDERS)
  return default_models.flat()
}

function getDefaultInOpenAIModels() {
  const openaiConfig = getConfig('ai')?.openai
  let default_model = RAYCAST_DEFAULT_MODELS
  if (openaiConfig?.default) {
    const model = openaiConfig.models?.[openaiConfig.default]
    if (model) {
      const id = model.id || openaiConfig.default

      default_model = {
        chat: id,
        quick_ai: id,
        commands: id,
        api: id,
      }
    }
  }

  return default_model
}

export function AIModels() {
  const config = getConfig('ai')
  let default_models
  switch (config?.default?.toLowerCase()) {
    case 'openai':
      default_models = getDefaultInOpenAIModels()
      break
    case 'gemini':
      default_models = RAYCAST_GEMINI_PRO_ONLY_MODELS
      break
    case 'groq':
      default_models = RAYCAST_DEFAULT_GROQ_MODELS
      break
    default:
      default_models = getDefaultInOpenAIModels()
      break
  }
  const models = generateRaycastAIServiceProviders()
  return {
    default_models,
    models,
  }
}
