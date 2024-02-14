import { AnonymousAuthenticationProvider } from "@microsoft/kiota-abstractions"
import { FetchRequestAdapter } from "@microsoft/kiota-http-fetchlibrary"
import { createApiClient } from "./client/apiClient"

const authProvider = new AnonymousAuthenticationProvider()
const adapter = new FetchRequestAdapter(authProvider)
adapter.baseUrl = "http://localhost:3000"

const client = createApiClient(adapter)

const main = async () => {
    console.log('run index.ts')

    const response = await client.contact.post({
        message: 'test',
    })
    console.log(response)
}

main()