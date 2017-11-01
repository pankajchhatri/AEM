/*
 *  Copyright 2015 Adobe Systems Incorporated
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
new hobs.TestSuite("We.Train Tests", {path:"/apps/trainingl/tests/SampleTests.js", register: true})

    .addTestCase(new hobs.TestCase("Hero component on en.html")
        .navigateTo("/content/we-train/en.html")
        .asserts.location("/content/we-train/en.html", true)
        .asserts.visible(".hero-image", true)
    )

    .addTestCase(new hobs.TestCase("Hero component on fr.html")
        .navigateTo("/content/we-train/fr.html")
        .asserts.location("/content/we-train/fr.html", true)
        .asserts.visible(".hero-image", true)
    )

    .addTestCase(new hobs.TestCase("Print Selector inserted on en.html")
		.navigateTo("/content/we-train/en.html")
		.asserts.location("/content/we-train/en.html", true)
		.asserts.exists("form.page__print[action='/content/we-train/en.print.html']",true)
	);
