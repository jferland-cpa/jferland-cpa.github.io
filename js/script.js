let main_heading = document.getElementById("main-heading")
let sub_heading = document.getElementById("main-sub-heading")
let title = document.getElementById("title")
let nav_menu = document.getElementById("main-nav-menu")

let about_1 = document.getElementById("about-1")
let about_2 = document.getElementById("about-2")

let phone_number = document.getElementById("phone-number")
let email_address = document.getElementById("email-address")

let copyright = document.getElementById("copyright-text")

let portfolio = document.getElementById("portfolio-container")

$(document).ready(() => {
	title.innerHTML = site_title
	main_heading.innerHTML = main_heading_text
	sub_heading.innerHTML = sub_heading_text
	nav_menu.innerHTML = ""
	nav_menu_items.forEach((element) => {
		nav_menu.innerHTML += `<li class="nav-item mx-0 mt-2 mx-lg-4">
                                <a class="btn btn-outline-light text-white nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger bg-secondary" href="${element.link}">${element.title}</a>
                                </li>`
	})
	about_1.innerHTML = about_text_1
	about_2.innerHTML = about_text_2

	phone_number.innerHTML = phone_number_text
	email_address.innerHTML = email_address_text
	email_address.href = `mailto:${email_address_text}`

	copyright.innerHTML = copyright_text

	let createPortfolio = () => {
		let numProjects = 0
		portfolio.innerHTML = ""
		portfolio_projects.forEach((project) => {
			numProjects++
			portfolio.innerHTML += `<div class="${
				numProjects % 2 == 0
					? "card bg-light text-secondary"
					: "card bg-secondary"
			}">  
                                    <h4 class="card-header">${
										project.title
									}</h4>
                                    <div class="card-body">
                                        <p class="card-text">${project.desc}</p>
                                    </div>
                                    <div class="card-footer">
                                    <a class="btn btn-outline-light bg-secondary mx-2" target="_blank" href="${
										project.code_link
									}">
                                        <p class="m-0">The Code</p>
                                    </a>
                                    <a class="btn bg-secondary ${
										numProjects % 2 == 0
											? "text-white"
											: "btn-outline-light"
									} mx-2" href="https://rhatcher94.github.io/HearthCards/#" target="_blank" ${
				project.app_link ? "" : "hidden"
			}>
                                        <p class="m-0">The App</p>
                                    </a>
                                </div>`
		})
	}

	createPortfolio()
})

$(document).scroll(function () {
	var scrollDistance = $(this).scrollTop()
	if (scrollDistance > 100) {
		$(".scroll-top-btn").fadeIn()
	} else {
		$(".scroll-top-btn").fadeOut()
	}
})
