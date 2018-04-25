import Route from '@ember/routing/route';

export default Route.extend({

  model() {
      return [{
        id: '1',
        title: '1168 East Broad Street, Columbus Ohio 43205',
        orderId: '010-123456',
        type: 'Purchase',
        propertyId: '',
        closing: 'Closing Fri, Apr 27, 2018'
      }, {
        id: '2',
        title: 'Testimony Avenue, Carmel Indiana 46033',
        orderId: '011-987656',
        type: 'Purchase',
        propertyId: '',
        closing: 'Closing Fri, July 27, 2018'
      }, {
        id: '3',
        title: '910 West Rich Street, Columbus Ohio 43222',
        orderId: '009-975324',
        type: 'Purchase',
        propertyId: '',
        closing: 'Closing Fri, June 27, 2018'
      }];
    }

});
