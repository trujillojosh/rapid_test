
console.log("is this even called? index.js");

function newSticky() {
    
    console.log("NEW STICKY\n");
    
    $("#corkboard").prepend("lol\n");
    
    client2
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
    
    
    
    // $('#corkboard').append("<div id=' 
    // // insert custom id 
    // ' class="sticky"><div class="stickyTitle">
    //       // insert thing from collection corresponding to id
    //       </div>
    //       <div class="stickyBody">
    //         // insert thing from collection corresponding to id
    //       </div>
    //       <form class ="check" action="javascript:check_done();">
    //           <input type="checkbox" name="done" value="bool"> Done<br>
    //       </form>
    //     </div>
    //     ")
}
