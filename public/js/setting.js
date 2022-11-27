function initeditprofile(){
    const fileinput=document.getElementById("file-input")
    const fileinputbtn=document.getElementById("file-input-btn")
    const image=document.getElementById("pp")

    fileinputbtn.addEventListener("click",() => {
        fileinput.click()
    })

    fileinput.addEventListener("change",() => {
        const file=fileinput.files[0]
        if (!file)return
        const url=URL.createObjectURL(file)
        image.src=url
    })
}
const eprof = document.getElementById("EP")
const cpass = document.getElementById("cp")
const maccount = document.getElementById("ma")
const help = document.getElementById("help")
// const privacy = document.getElementById("privacy")
const index = document.getElementById("rb")

function seteditprof () {
    eprof.classList.add("bold")
    cpass.classList.remove("bold")
    maccount.classList.remove("bold")
    help.classList.remove("bold")
    // privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="eprofile">
    <form class="application">
    <div class="pht-and-usr">
        <div class="chng-pp">
            <img class="chng-photo" id="pp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Mj62cjXkXmauiMnayyCutlWEXBVEiYeaZQ&usqp=CAU"> 
        </div>
        <div class="username-and-pp">
            <h1 class="name-user" title="">user1</h1>
            <input type="file" id="file-input" class="chngpict" name="myFile" accept="image/png, image/gif, image/jpeg"><label id="file-input-btn" for="myFile">Change Picture</label>
        </div>
    </div>

            <label for="name">Name</label><input type="text" name="name" class="namee" placeholder="Name">
            <label for="username">Username</label><input type="text" name="username" class="user-namee" placeholder="Username">
            <label for="email">E-mail</label><input type="email" name="email" class="email" placeholder="E-mail">
            <label for="bio">Bio</label>
            <textarea name="bio" class="change-input" placeholder="Add a bio" id="bio" rows="3" cols="20" maxlength="100"></textarea> 
            <div class="btnsumit">   
            <button type="submit" name="Submit" class="submit">Submit</button>
            </div>
        </form>
    </div>
</article>
    `
initeditprofile()
}
seteditprof()
eprof.addEventListener("click",seteditprof)

cpass.addEventListener("click", function () {
    eprof.classList.remove("bold")
    cpass.classList.add("bold")
    maccount.classList.remove("bold")
    help.classList.remove("bold")
    // privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="changepassword">
        <form class="application">
            <label for="newpassword">New Password</label><input type="password" name="newpassword" class="npass">
            <label for="cnewpassword">Confirm New Password</label><input type="password" name="cnewpassword"
                class="cnpass">
            <div class="btnupdt">
            <button type="submit" name="Update" class="updtbtn">Update</button>
            </div>
        </form>
    </article>
    `
})

maccount.addEventListener("click", function () {
    eprof.classList.remove("bold")
    cpass.classList.remove("bold")
    maccount.classList.add("bold")
    help.classList.remove("bold")
    // privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="privacysettings">
        <div class="manage-account">Manage Account</div>
        <div class="manage-item">
        <div class="acc-cntrl">Account Control</div>
        <div class="acc-cntrl-option">Delete Account</div>
            <div class="delete-btn">Delete</div>
        </div>
    </div>
    </article>`
})

help.addEventListener("click", function () {
    eprof.classList.remove("bold")
    cpass.classList.remove("bold")
    maccount.classList.remove("bold")
    help.classList.add("bold")
    // privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="settings">
        <div class="help-title">Help</div>
            <div class="privacy-item">
                <div class="help-form">
                    <form class="application">
                        <div class="subtitle">Report Problem</div>
                        <div class="desc-txt">Please provide as much detail as possible so we can better verify the problem
                            <br>When(time date) did the problem occur?
                            <br>What is the exact error message that you received?
                        </div>
                        <textarea class="description-text-box" name="reportproblem" cols="40" rows="3" maxlength="120" placeholder="Describe your problem here..." required></textarea>
                        <label for="namereport">Name</label><input type="text" name="namereport" class="" required>
                        <label for="emailreport">Email</label><input type="email" name="emailreport" class="" required>
                        <div class="btnupdt">
                        <button type="submit" name="Update" class="updtbtn">Submit</button>
                        </div>
                    </form>
            </div>
        </div>                
    </div>
</article>
    `
})

/* PROFILE NAVBAR */
$('.master,.profile-menu').mouseover(function(event){
  $('.profile-menu').removeClass("hidden");
  });
  
  $('.profile-menu').mouseout(function(event){
    $('.profile-menu').addClass("hidden");
    });
  
  $('.container').mouseover(function(event){
    $('.profile-menu').addClass("hidden");
    });

    $(document).mouseleave(function () {
      $('.profile-menu').addClass("hidden");
  });

    $('.master').click(function(event) {
    location.href=`/user`;
  });