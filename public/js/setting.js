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
const privacy = document.getElementById("privacy")
const index = document.getElementById("rb")

function seteditprof () {
    eprof.classList.add("bold")
    cpass.classList.remove("bold")
    maccount.classList.remove("bold")
    help.classList.remove("bold")
    privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="pht-and-usr">
        <div class="chng-pp">
            <img class="chng-photo" id="pp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Mj62cjXkXmauiMnayyCutlWEXBVEiYeaZQ&usqp=CAU"> 
        </div>
        <div class="username-and-pp">
            <h1 class="name-user" title="">user1</h1>
            <input type="file" id="file-input" class="chngpict"><span id="file-input-btn">Change Picture</span>
        </div>
    </div>
    <div class="eprofile">
        <form>
            <span>Name</span><input type="text" name="Name" class="namee" placeholder="Name">
            <span>Username</span><input type="text" name="UName" class="user-namee" placeholder="Username">
            <span>E-mail</span><input type="email" name="Email" class="emaill" placeholder="E-mail">
            <span>Phone Number</span><input type="tel" name="Pnumber" class="pnumberr" placeholder="Phone Number">
            <span>Gender</span>
                <div class="malee">
                    <input type="radio" name="gender"><label>Laki-Laki</label>
                    <input type="radio" name="gender"><label>Perempuan</label>
                </div>
             <div class="btnsumit">   
            <button type="submit" name="Submit" class="sumit">Submit</button>
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
    privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="changepassword">
        <form>
            <span>Old Password</span><input type="password" name="Oldpassword" class="opass">
            <span>New Password</span><input type="password" name="newpassword" class="npass">
            <span>Confirm New Password</span><input type="password" name="cnewpassword"
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
    privacy.classList.remove("bold")
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
    privacy.classList.remove("bold")
    index.innerHTML = `
    <article>
    <div class="settings">
        <div class="help-title">Help</div>
            <div class="privacy-item">
                <div class="help-form">
                    <form>
                        <div class="subtitle">Report Problem</div>
                        <div class="desc-txt">Please provide as much detail as possible so we can better verify the problem
                            <br>When(time date) did the problem occur?
                            <br>What is the exact error message that you received?
                        </div>
                        <textarea class="description-text-box" name="reportproblem" cols="40" rows="3" maxlength="120" placeholder="Describe your problem here..." required></textarea>
                        <span>Name</span><input type="text" name="namereport" class="" required>
                        <span>Email</span><input type="email" name="emmailreport" class="" required>
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

privacy.addEventListener("click", function () {
    eprof.classList.remove("bold")
    cpass.classList.remove("bold")
    maccount.classList.remove("bold")
    help.classList.remove("bold")
    privacy.classList.add("bold")
    index.innerHTML = `
    <article>
    <div class="privacysettings">
        <div class="privacy-title">Privacy</div>
        <div class="privacy-item">
        <div class="subtitle">Discoverability</div>
        <div class="private-account">Private Account</div>
        <div class="desc-txt">With a private account, only users you approve can follow you and watch your videos. Your existing followers won't be affected.</div>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>
    </div>
    </article>
    `
})