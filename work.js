var Rapid = require('rapid-io');
const client = Rapid.createClient('NDA1OWE0MWo1b3AzYXBmLnJhcGlkLmlv');

console.log('something');

function  sticky_create() {
  console.log('shit not broken');
    client
        .collection('notes')
        .newDocument()
        .mutate({
            title: 'body',
            status: false,
            body: 'content'
        })
}
