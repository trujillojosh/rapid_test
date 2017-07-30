const client = Rapid.createClient('NDA1OWE0MWo1b3AzYXBmLnJhcGlkLmlv')


console.log("index.js loaded");


$("#newStickyBtn").click(function (){
    $("#openFade").toggleClass("hidden");
})

$(".expandBtn").click(function () {
    console.log("clicked dicky dicks");
    console.log(this.parent.id);
})

client
  .collection('notes-2')
  .subscribe((messages, changes) => {
    changes.added.forEach(message => {
        // console.log(message.body.title);
         $('#todo').append('<div class="stickyItem" id=' + message.id + '>' +
        '<div class="stickyTitle">' + message.body.title + '</div>' + 
        '<div class="stickyBody">' + message.body.body + '</div>' +
        '<button class="expandBtn">Expand</button>' + '</BR>' +
        '<input type="checkbox" class="box" name="done" value="bool">' + 'Done' +
        '</div>');
         $('#log').append('<div class="stickyItem" id=' + message.id + '>' +
        '<div class="stickyTitle">' + message.body.title + '</div>' + 
        '<div class="stickyBody">' + message.body.body + '</div>' +
        '<button class="expandBtn">Expand</button>' + '</BR>' +
        '<input type="checkbox" class="box" name="done" value="bool">' + 'Done' +
        '</div>');
    // $('#fuckingWork').append($('<div>')).message.body.title;
    //  $('#fuckingWork').append('<span>' + message.body.title + '</span>');
    //  //$('#fuckingWork').append($('<div>')).message.body.title;
     
    //   $('#fuckingWork').append($('<div>')).text("should work");
    //   $('#fuckingWork').prepend($('<div>')).html("after work");
    //   $('#fuckingWork').append($('<div>')).html("last fucking thing");

    })
  })
// $("#submitBtn").click(function () {
//     console.log("fucking clicks");
//     $("input[type='text']").value = "blahs";
// })


// function that hides the stickies after it has been marked done
// $(".box").click(function () {
//     console.log("hiding done sticky");
//      $(this).hide();
    ;

// })

function  sticky_create() {
    $("#openFade").toggleClass("hidden");
    console.log($('#textT').val());
    console.log($('#textB').val());
    console.log('shit not broken');
    client
        .collection('notes-2')
        .newDocument()
        .mutate({
            title: $('#textT').val(),
            status: false,
            body: $('#textB').val()
        })
    $("#textT").val("Title");
    $("#textB").val("Message");
}

// $("#todo").click(e => {
//     console.log("fucking activate my click");
//     load_todo();
// })

// function load_todo() {
//     client
//   .collection('notes-2')
//   .subscribe((messages, changes) => {
//     changes.added.forEach(message => {
//       $('#todo').prepend($('<div>').text(message.id));
//     })
//   })
// }

// function newSticky() {
    
//     console.log("NEW STICKY\n");
    
//     $("#corkboard").prepend("lol\n");
    
//     client2
//         .collection('notes')
//         .newDocument()
//         .mutate({
//             title: 'test',
//             status: false,
//             body: 'testing'
//         })
//         .then(
//             () => console.log('create success'),
//             err => {
//                 if (err) {
//                     switch (err.type) {
//                         case 'timeout': break
//                         case 'permissions-issue': break
//                     }
//                 }
//             })
    
    
    
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
// function openMenu(menuName)
// {
    
//     client
//   .collection('notes-2')
//   .subscribe((messages, changes) => {
//     changes.added.forEach(message => {
//       $('#todo').prepend($('<div>').text(message.id));
      
//     // var i;
//     // var x = document.getElementsByClassName('sticky');
//     // for (i = 0; i < x.length; i++)
//     //   x[i].style.display = "none";  
//     // document.getElementById(menuName).style.display = "";  
// })
// })
// }
