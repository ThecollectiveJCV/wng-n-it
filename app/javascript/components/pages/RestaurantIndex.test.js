import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import RestaurantIndex from './RestaurantIndex'
Enzyme.configure({adapter: new Adapter()})

describe("When RestaurantIndex renders", () => {
    it("displays a heading", () => {
        const restaurantIndex = shallow(<RestaurantIndex />)
        const restaurantIndexHeading = restaurantIndex.find("Col");
        expect(restaurantIndexHeading.length).toEqual(1)
    })
  })