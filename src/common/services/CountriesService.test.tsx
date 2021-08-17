  
import axios from "axios";
import { COUNTRIES } from '../../../fixtures/COUNTRIES';
import { countriesService } from './CountriesService';
jest.mock("axios");

describe("Countries service", () => {
  beforeEach(() => {    
	jest.fn().mockClear();
  });

  it("should get all countries", async () => {
    axios.get = jest.fn().mockResolvedValue(COUNTRIES);

    const result = await countriesService.getAllCountries();
    expect(result.length).toEqual(250);
  });
});