import Component from '@ember/component';

export default Component.extend({

  disableButtonValue: true,

actions: {
  disableButton(){
    this.set('disableButton', false);
  }
}


});
