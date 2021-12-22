import { Client } from '@notionhq/client'

import env from '~/server/contexts/client-front/Modules/Shared/Utils/env'

import type SdkClient from '../../Domain/Sdk/SdkClient'

class SdkClientNotion implements SdkClient<Client> {
  public getClient(): Client {
    const notion = new Client({
      auth: env.BOOKS_NOTION_TOKEN,
    })

    return notion
  }
}

export default SdkClientNotion