// import got, {Options} from "got" 

const uberApiToken = ""
// Add token to .env file

class UberClient {
  // static async getRide(latitude, longitude) {
  //   try {
  //     const url = `https://api.uber.com/v1.2/products?latitude=${latitude}&longitude=${longitude}`
  //     const apiResponse = await got(url, new Options ({
  //       headers: {
  //         "Authorization": `Token ${uberApiToken}`,
  //         "Content-Type": "application/json",
  //         "Accept-Language" : "en_US"
  //       }
  //     })
  //     )
  //     const responseBody = apiResponse.body
  //     return responseBody
  //   } catch (error) {
  //     return { error: error.message }
  //   }
  // }
}

export default UberClient