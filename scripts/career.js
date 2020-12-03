function main() {
    $('section').hide();
    $('section').fadeIn(500);

    initECRSLogoLink();
    initSkillsTable();
    initGitHubLogoLink();
    initSampleWebPage();
    initSpineLeafDemo();
}
main();

function initSkillsTable(){
    let upcomings = document.getElementsByClassName('upcoming');
    for(let ele of upcomings){
        ele.addEventListener('mouseover', ()=>{
            for(let ele2 of upcomings){
                ele2.style.backgroundColor = 'blue';
            }
        });
        ele.addEventListener('mouseout', ()=>{
            for(let ele2 of upcomings){
                ele2.style.backgroundColor = 'rgb(125, 125, 255)';
            }
        });
    }

    let workingOns = document.getElementsByClassName('workingOn');
    for(let ele of workingOns){
        ele.addEventListener('mouseover', ()=>{
            for(let ele2 of workingOns){
                ele2.style.backgroundColor = 'orange';
            }
        });
        ele.addEventListener('mouseout', ()=>{
            for(let ele2 of workingOns){
                ele2.style.backgroundColor = 'rgb(255, 210, 125)';
            }
        });
    }

    let proficients = document.getElementsByClassName('proficient');
    for(let ele of proficients){
        ele.addEventListener('mouseover', ()=>{
            for(let ele2 of proficients){
                ele2.style.backgroundColor = 'green';
            }
        });
        ele.addEventListener('mouseout', ()=>{
            for(let ele2 of proficients){
                ele2.style.backgroundColor = 'rgb(90, 128, 90)';
            }
        });
    }

    $("#skillsArticle li").on('mouseover', function(){
        $(this).css('cursor', 'default');
        $(this).animate({
            fontSize: 20
        }, 100, 'swing', ''); 
    }).on('mouseout', function(){
        $(this).animate({
            fontSize: 18
        }, 100, 'swing', ''); 
    });
}

function initECRSLogoLink(){
    $("#ecrsLogo").on('mouseover', function(){
        $(this).css('cursor', 'pointer');
        $(this).animate({
            height: 28,
            width: 137
        }, 100, 'swing', ''); 
    }).on('mouseout', function(){
        $(this).css('cursor', 'defualt');
        $(this).animate({
            height: 24,
            width: 133
        }, 100, 'swing', ''); 
    });
    document.getElementById("ecrsLogo").addEventListener('click', ()=>{
        window.open('https://www.ecrs.com/company/', '_black');
    }, false);
}

function initGitHubLogoLink() {
    $(".githubLogo").on('mouseover', function(){
        $(this).css('cursor', 'pointer');
        $(this).animate({
            height: 52,
            width: 52
        }, 100, 'swing', ''); 
    }).on('mouseout', function(){
        $(this).css('cursor', 'defualt');
        $(this).animate({
            height: 50,
            width: 50
        }, 100, 'swing', ''); 
    });
    document.getElementById("gitHubResearch").addEventListener('click', ()=>{
        window.open('https://github.com/HillBryan/ResearchTeam', '_black');
    }, false);
}

function initSampleWebPage(){
    $("#sampleWebPageLogo").on('mouseover', function(){
        $(this).css('cursor', 'pointer');
        $(this).animate({
            height: 52,
            width: 47
        }, 100, 'swing', ''); 
    }).on('mouseout', function(){
        $(this).css('cursor', 'defualt');
        $(this).animate({
            height: 50,
            width: 45
        }, 100, 'swing', ''); 
    });
    document.getElementById("sampleWebPageLogo").addEventListener('click', ()=>{
        window.open('http://54.163.160.207/server/src/', '_black');
    });
}

function initSpineLeafDemo() {
    $('#SpineLeafDemo').on('mouseover', function() {
        $(this).css('cursor', 'pointer');
    }).on('mouseout', function() {
        $(this).css('cursor', 'default');
    });
    document.getElementById('SpineLeafDemo').addEventListener('click', ()=>{
        window.open('media/SpineLeafDemo.gif', '_black');
    }, false);
}