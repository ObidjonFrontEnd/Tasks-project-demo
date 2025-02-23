// dark mode selection
let darkMode = document.getElementById('darkLight')
let moon = document.querySelector('header button .bxs-moon')
let sun = document.querySelector('header button .bxs-sun')
let body = document.querySelector('body')

let history = document.getElementById('history')
let historyBtn = document.getElementById('historyBtn')
let historyBtnClose = document.getElementById('historyBtnClose')

//open and close seclector
let addtaskShow = document.getElementById('addtaskShow')

//selector for add tasks
let newTask = document.getElementById('newTask') //form
let taskName = document.getElementById('taskName')
let taskInfo = document.getElementById('taskInfo')

let tasksData = []

//sector for read
// let tasksBody = document.getElementById('tasksBody');
let showTasks = document.getElementById('showTasks')

//funtion dark mode
darkMode.addEventListener('click', function () {
	body.classList.toggle('darkMode')
	sun.classList.toggle('hiddens')
	moon.classList.toggle('hiddens')
})

//function show add new task
addtaskShow.addEventListener('click', showHidden)
function showHidden() {
	addtaskShow.classList.toggle('rotate-[45deg]')
	newTask.classList.toggle('scale-0')
	newTask.classList.toggle('translate-y-[100%]')
	newTask.classList.toggle('translate-x-[100%]')
}

newTask.addEventListener('submit', function (event) {
	event.preventDefault()
	let date = new Date()
	testTask(date)
	showHidden()
})

function creat() {
	tasksData.push({
		title: taskName.value,
		info: taskInfo.value,
		date: date.toLocaleDateString(),
	})
	localStorage.setItem('tasks', JSON.stringify(tasksData))
	read()
}
function testTask(date) {
	count = 0
	if (taskName.value.trim() == '') {
		count--
	} else {
		count++
	}
	if (taskInfo.value.trim() == '') {
		count--
	} else {
		count++
	}
	if (count >= 0) {
		creat(date)
	} else {
		showHidden()
	}
}


//test tasks funtion

//creat function
;(function () {
	tasksData = JSON.parse(localStorage.getItem('tasks')) ? JSON.parse(localStorage.getItem('tasks')) : []
	read()
})()

//read function
function read() {
	showTasks.innerHTML = ''
	tasksData.map(task => {
		showTasks.innerHTML += `
		<div class="task relative bg-[#FF7F50] w-[300px] rounded-[10px]  min-h-[250px] mx-auto overflow-hidden px-[20px] py-[30px] pb-[60px]">
						
			<p class = "text-center font-bold text-[20px] w-[200px] mx-auto whitespace-normal">${task.title} .</p>
			<p class =" mx-auto whitespace-normal text-[18px]">${task.info}</p>
			<p class = 'text-[18px] font-[400] absolute bottom-[20px] '>${task.date}</p>
			<button onclick="close" class ="absolute text-[30px] bottom-[10px] right-[60px]" ><i class='bx bx-check'></i> <i class='bx bx-check-double'></i></button>
			<div class="nujen w-[100px] h-[100px]  rotate-[45deg] absolute bottom-[-55px] right-[-55px]"></div>
						
		</div>
		`
		taskName.value = ''
		taskInfo.value = ''
	})
}

//test
historyBtn.addEventListener('click', function () {
	history.classList.remove('translate-x-[-100%]')
	setTimeout(function () {
		history.classList.remove('scale-[0.9]')
	}, 1000)
})

historyBtnClose.addEventListener('click', function () {
	history.classList.add('scale-[0.9]')
	setTimeout(function () {
		history.classList.add('translate-x-[-100%]')
	}, 1000)
})

historyBtn.addEventListener('dblclick', function () {
	history.classList.remove('translate-x-[-100%]')
	setTimeout(function () {
		history.classList.remove('scale-[0.9]')
	}, 1000)
})
historyBtnClose.addEventListener('dblclick', function () {
	history.classList.add('scale-[0.9]')
	setTimeout(function () {
		history.classList.add('translate-x-[-100%]')
	}, 1000)
})
