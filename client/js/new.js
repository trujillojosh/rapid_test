//import rapid from 'rapid-io'

const client = Rapid.createClient('NDA1OWE0MWo1b3AzYXBmLnJhcGlkLmlv')

// $('#input').keyup(e => {
//   if (e.which === 13) {
//     client
//       .collection('notes')
//       .newDocument()
//       .mutate({
//           title: $('#input').va(),
//           status: false,
//           info: blahblahlbah
//       })
//      })
//      // .mutate({ text: $('#input').val() })
//     ///$('#input').val('')
//   })


$('#newSticky').keyup(e => {
    if (e.which === 13) {
        client
            .collection('notes')
            .newDocument()
            .mutate({
                title: 'test',
                status: false,
                body: 'testing'
            })
            .then(
                () => console.log('create success'),
                err => {
                    if (err) {
                        switch (err.type) {
                            case 'timeout': break
                            case 'permissions-issue': break
                        }
                    }
                })
    }
})

function    sticky_create() {
    client
        .collection('messages')
        .newDocument()
        .mutate({
            title: 'body',
            status: false,
            body: 'content'
        })
}