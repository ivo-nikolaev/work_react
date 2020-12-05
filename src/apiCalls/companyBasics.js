import {
  companyBasicsTivoli,
  companyBasicsInactive,
  companyBasicsCarlsberg,
} from "./jsonData"

/**
 * Variables to get the different types of company
 * 1: Normal company with all data fields available
 * 2: Inactive company with some of the data unavailable
 * 3: Company with excess data in a sertain field
 */

const getCorespondingData = (dataType) => {
  switch (dataType) {
    case 1:
      return companyBasicsTivoli
    case 2:
      return companyBasicsInactive
    case 3:
      return companyBasicsCarlsberg
    default:
      throw new Error("Explosions in your console!!! You forgot something!!!")
  }
}

const companyBasics = (dataType) => {
  if (!dataType) {
    throw new Error("Explosions in your console!!! You forgot something!!!")
  }
  return new Promise((resolve, reject) => {
    setTimeout(
      resolve({ data: getCorespondingData(dataType) }),
      Math.random() * 1000
    )
  })
}

export default companyBasics
