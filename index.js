function startTime() {
 fetch("https://api.github.com/users/abdullahiqbal")
.then((result) => result.json())
.then((data) => {
    console.log(data)
})
   
}