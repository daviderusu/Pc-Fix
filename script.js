
// PC FIX AI - Main JavaScript

// DARK MODE
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        themeBtn.innerHTML =
            document.body.classList.contains("light-mode")
                ? '<i class="fas fa-moon"></i>'
                : '<i class="fas fa-sun"></i>';
    });
}

// DISPLAY RESULTS
function showResult(title, message) {
    const result = document.getElementById("result");
    const resultText = document.getElementById("resultText");

    if (!result || !resultText) return;

    resultText.innerHTML = `
        <h3>${title}</h3>
        <p>${message}</p>
    `;

    result.style.display = "block";
    result.scrollIntoView({ behavior: "smooth" });
}

// PC DIAGNOSTICS
function showTool(tool) {

    switch (tool) {

        case "diagnostics":
            showResult(
                "PC Diagnostics",
                "Start with these basic checks:<br><br>" +
                "1. Check CPU usage.<br>" +
                "2. Check RAM usage.<br>" +
                "3. Check available disk space.<br>" +
                "4. Check Windows updates.<br>" +
                "5. Check Device Manager for errors."
            );
            break;

        case "repair":
            showResult(
                "Windows Repair",
                "Recommended basic checks:<br><br>" +
                "1. Restart your computer.<br>" +
                "2. Check Windows Update.<br>" +
                "3. Run Windows Troubleshooter.<br>" +
                "4. Check system files.<br><br>" +
                "Always back up important files before repairs."
            );
            break;

        case "security":
            showResult(
                "Security Check",
                "Protect your PC:<br><br>" +
                "1. Check Windows Security.<br>" +
                "2. Make sure antivirus protection is active.<br>" +
                "3. Check Firewall status.<br>" +
                "4. Install security updates.<br>" +
                "5. Avoid suspicious downloads."
            );
            break;

        case "assistant":
            showResult(
                "PC FIX AI Assistant",
                "Hello! I am your PC FIX assistant.<br><br>" +
                "Tell me what problem your computer has:<br>" +
                "• Windows does not start<br>" +
                "• Computer is slow<br>" +
                "• Wi-Fi does not work<br>" +
                "• Blue screen error<br>" +
                "• No sound"
            );
            break;

        default:
            showResult(
                "PC FIX AI",
                "Select a diagnostic tool to continue."
            );
    }
}


// SMART REPAIR ASSISTANT

const analyzeBtn = document.getElementById("analyzeBtn");

if (analyzeBtn) {
    analyzeBtn.addEventListener("click", analyzeProblem);
}

function analyzeProblem() {

    const input = document.getElementById("problemInput");
    const response = document.getElementById("aiResponse");

    if (!input || !response) return;

    const problem = input.value.toLowerCase().trim();

    if (problem === "") {
        response.style.display = "block";
        response.innerHTML = "<h3>Please describe your problem first.</h3>";
        return;
    }

    let title = "PC FIX AI Analysis";
    let advice = "";

    if (problem.includes("slow") || problem.includes("lent")) {
        title = "Computer Running Slowly";
        advice = `
            <p>Possible causes:</p>
            <ul>
                <li>Too many startup applications.</li>
                <li>Insufficient RAM.</li>
                <li>Low disk space.</li>
                <li>Background processes.</li>
            </ul>
            <p><strong>Recommended actions:</strong></p>
            <ol>
                <li>Open Task Manager.</li>
                <li>Check CPU and RAM usage.</li>
                <li>Disable unnecessary startup apps.</li>
                <li>Check available disk space.</li>
            </ol>`;
    }
    else if (problem.includes("wifi") || problem.includes("internet")) {
        title = "Network Connection Problem";
        advice = `
            <ol>
                <li>Check that Wi-Fi is enabled.</li>
                <li>Restart your router.</li>
                <li>Restart your computer.</li>
                <li>Check the Wi-Fi adapter in Device Manager.</li>
            </ol>`;
    }
    else if (problem.includes("blue screen") || problem.includes("bsod")) {
        title = "Blue Screen Error";
        advice = `
            <ol>
                <li>Write down the error code.</li>
                <li>Check recently installed drivers.</li>
                <li>Disconnect newly added hardware.</li>
                <li>Check Windows Update.</li>
            </ol>`;
    }
    else if (problem.includes("start") || problem.includes("boot")) {
        title = "Windows Startup Problem";
        advice = `
            <ol>
                <li>Check power and cable connections.</li>
                <li>Disconnect unnecessary USB devices.</li>
                <li>Check whether the SSD is detected in BIOS.</li>
                <li>Try Windows Startup Repair.</li>
            </ol>`;
    }
    else if (problem.includes("sound") || problem.includes("audio")) {
        title = "Sound Problem";
        advice = `
            <ol>
                <li>Check the volume and output device.</li>
                <li>Run the Windows audio troubleshooter.</li>
                <li>Check the audio driver in Device Manager.</li>
            </ol>`;
    }
    else {
        title = "More Information Needed";
        advice = `
            <p>I need more details to identify the problem.</p>
            <p>Tell me:</p>
            <ul>
                <li>Which operating system do you use?</li>
                <li>What happens when you turn on the PC?</li>
                <li>Do you see an error message?</li>
            </ul>`;
    }

    response.innerHTML = `
        <h3>${title}</h3>
        ${advice}
        <p><em>These are preliminary suggestions, not a confirmed diagnosis. Back up important data before attempting repairs.</em></p>
    `;

    response.style.display = "block";
    response.scrollIntoView({ behavior: "smooth" });
}


// PC SYSTEM DASHBOARD

function updateDashboard() {

    const ua = navigator.userAgent;

    // Operating System (best effort)
    let os = "Unknown";

    if (/Macintosh|Mac OS X/.test(ua)) os = "macOS";
    else if (/Windows/.test(ua)) os = "Windows";
    else if (/Android/.test(ua)) os = "Android";
    else if (/iPhone|iPad/.test(ua)) os = "iOS";
    else if (/Linux/.test(ua)) os = "Linux";

    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    setText("osInfo", os);

    // Browser
    let browser = "Unknown";

    if (ua.includes("Edg/")) browser = "Microsoft Edge";
    else if (ua.includes("Chrome/")) browser = "Google Chrome";
    else if (ua.includes("Firefox/")) browser = "Mozilla Firefox";
    else if (ua.includes("Safari/")) browser = "Safari";

    setText("browserInfo", browser);

    // Available memory (only if browser exposes it)
    const memory = navigator.deviceMemory;

    setText("memoryInfo",
        memory ? memory + " GB (approx. device RAM)" : "Not available");

    // Screen resolution
    setText("screenInfo", screen.width + " × " + screen.height);

    // Internet connection
    setText("internetInfo", navigator.onLine ? "Online" : "Offline");
}

// Refresh button
const refreshDashboard = document.getElementById("refreshDashboard");

if (refreshDashboard) {
    refreshDashboard.addEventListener("click", updateDashboard);
}

// Update when page opens
if (document.getElementById("dashboard")) {
    updateDashboard();
}

// Monitor connection changes
window.addEventListener("online", updateDashboard);
window.addEventListener("offline", updateDashboard);


// HARDWARE SCANNER

const scanButton = document.getElementById("scanHardware");

if (scanButton) {
    scanButton.addEventListener("click", scanHardware);
}

async function scanHardware() {

    const status = document.getElementById("hardwareStatus");

    if (status) status.textContent = "Scanning available device information...";

    // Platform
    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    setText("platformInfo",
        navigator.userAgentData?.platform || navigator.platform || "Not available");

    // Memory
    setText("hardwareMemory",
        navigator.deviceMemory
            ? navigator.deviceMemory + " GB (approximate)"
            : "Not available");

    // CPU logical cores
    setText("cpuCores",
        navigator.hardwareConcurrency
            ? navigator.hardwareConcurrency + " logical cores"
            : "Not available");

    // Screen
    setText("displayInfo",
        screen.width + " × " + screen.height +
        " | " + screen.colorDepth + "-bit color");

    // Battery
    const batteryElement = document.getElementById("batteryInfo");

    if (navigator.getBattery) {
        try {
            const battery = await navigator.getBattery();

            if (batteryElement) {
                batteryElement.textContent =
                    Math.round(battery.level * 100) + "% " +
                    (battery.charging ? "(Charging)" : "(Not charging)");
            }
        } catch {
            if (batteryElement) batteryElement.textContent = "Access unavailable";
        }
    } else {
        if (batteryElement) batteryElement.textContent = "Not supported by browser";
    }

    if (status) {
        status.textContent =
            "Scan completed! Available browser information updated.";
    }
}


// PC HEALTH REPORT

const generateReportBtn = document.getElementById("generateReport");
const printReportBtn = document.getElementById("printReport");

function escapeReportText(value) {
    return String(value).replace(/[&<>"']/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[character]);
}

if (generateReportBtn) {
    generateReportBtn.addEventListener("click", generateHealthReport);
}

if (printReportBtn) {
    printReportBtn.addEventListener("click", () => {
        window.print();
    });
}


async function generateHealthReport() {

    const preview = document.getElementById("reportPreview");
    if (!preview) return;

    if (typeof updateDashboard === "function") {
        updateDashboard();
    }

    if (typeof scanHardware === "function") {
        await scanHardware();
    }

    const reportNumber =
        "PCFIX-" + Date.now().toString().slice(-8);

    const reportDate = new Date().toLocaleString();

    const reportData = [
        ["Operating System", "osInfo"],
        ["Browser", "browserInfo"],
        ["Available Memory", "memoryInfo"],
        ["Internet Connection", "internetInfo"],
        ["Device Platform", "platformInfo"],
        ["Hardware Memory", "hardwareMemory"],
        ["CPU Logical Cores", "cpuCores"],
        ["Screen Information", "displayInfo"],
        ["Battery Status", "batteryInfo"]
    ];

    const rows = reportData.map(([label, elementId]) => {
        const element = document.getElementById(elementId);
        const value = element
            ? element.textContent
            : "Not available";

        return `
            <tr>
                <td>${escapeReportText(label)}</td>
                <td>${escapeReportText(value || "Not available")}</td>
            </tr>
        `;
    }).join("");

    preview.innerHTML = `
        <div class="professional-report">

            <div class="report-header">
                <div class="report-brand">
                    <h2><i class="fas fa-microchip"></i> PC FIX AI</h2>
                    <p>COMPUTER DIAGNOSTICS & TECHNICAL REPORT</p>
                </div>

                <div class="report-number">
                    <strong>REPORT ID</strong>
                    <p>${reportNumber}</p>
                </div>
            </div>

            <hr>

            <h3>SYSTEM HEALTH REPORT</h3>

            <p><strong>Generated:</strong> ${escapeReportText(reportDate)}</p>
            <p><strong>Report status:</strong> Information collected</p>

            <h4>1. SYSTEM INFORMATION</h4>

            <table class="report-table">
                <tbody>
                    ${rows}
                </tbody>
            </table>

            <h4>2. TECHNICAL RECOMMENDATIONS</h4>

            <ul>
                <li>Keep your operating system updated.</li>
                <li>Check available disk space regularly.</li>
                <li>Maintain active security protection.</li>
                <li>Back up important files.</li>
                <li>Check hardware temperatures using a suitable local tool.</li>
            </ul>

            <h4>3. TECHNICAL CONCLUSION</h4>

            <p>
                System information was collected successfully.
                Some hardware details are unavailable through the browser.
                Further physical or local software diagnostics may be required.
            </p>

            <div class="report-footer">
                <p><strong>PC FIX AI</strong> – Smart Computer Repair Assistant</p>
                <p>Preliminary information report – Not a certified diagnosis.</p>
                <p>Report ID: ${reportNumber}</p>
            </div>

        </div>
    `;

    // Save generated report to history
saveReportToHistory(reportNumber, reportDate, preview.innerHTML);

    preview.style.display = "block";
    if (printReportBtn) printReportBtn.style.display = "inline-block";

    preview.scrollIntoView({ behavior: "smooth" });
}


// ==================================
// PC FIX AI - DIAGNOSTIC HISTORY
// ==================================

const HISTORY_KEY = "pcFixDiagnosticHistory";

function getReportHistory() {
    try {
        const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
        return Array.isArray(history) ? history : [];
    } catch {
        return [];
    }
}

function saveReportToHistory(reportNumber, reportDate, reportHTML) {

    const history = getReportHistory();

    const report = {
        id: reportNumber,
        date: reportDate,
        html: reportHTML
    };

    history.unshift(report);

    // Keep the latest 10 reports
    const latestReports = history.slice(0, 10);

    try {
        localStorage.setItem(
            HISTORY_KEY,
            JSON.stringify(latestReports)
        );
    } catch {
        alert("Unable to save report in browser storage.");
    }

    renderHistory();
}

// Display saved reports
function renderHistory() {

    const history = getReportHistory();

    const historyList = document.getElementById("historyList");
    const historyCount = document.getElementById("historyCount");

    if (!historyList || !historyCount) return;

    historyCount.textContent =
        history.length + (history.length === 1 ? " Report" : " Reports");

    if (history.length === 0) {
        historyList.innerHTML = `
            <p class="empty-history">
                No diagnostic reports saved yet.
            </p>
        `;
        return;
    }

    historyList.innerHTML = history.map(report => `
        <div class="history-item">
            <div>
                <h4>PC Health Report</h4>
                <p>Report ID: ${escapeReportText(report.id)}</p>
                <p>${escapeReportText(report.date)}</p>
            </div>

            <div class="history-actions">
                <button
                    class="view-report-btn"
                    data-action="view"
                    data-id="${escapeReportText(report.id)}">
                    <i class="fas fa-eye"></i> View
                </button>

                <button
                    class="delete-report-btn"
                    data-action="delete"
                    data-id="${escapeReportText(report.id)}">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        </div>
    `).join("");
}

// View or delete a saved report
const historyListElement = document.getElementById("historyList");

if (historyListElement) {

    historyListElement.addEventListener("click", event => {

        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const reportId = button.dataset.id;
        const action = button.dataset.action;

        if (action === "view") {

            const history = getReportHistory();
            const report = history.find(item => item.id === reportId);

            if (!report) return;

            const preview = document.getElementById("reportPreview");

            if (!preview) return;

            preview.innerHTML = report.html;
            preview.style.display = "block";

            const printButton = document.getElementById("printReport");
            if (printButton) printButton.style.display = "inline-block";

            preview.scrollIntoView({ behavior: "smooth" });
        }

        if (action === "delete") {

            const confirmed = confirm(
                "Delete this diagnostic report?"
            );

            if (!confirmed) return;

            const history = getReportHistory()
                .filter(item => item.id !== reportId);

            try {
                localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
            } catch {
                alert("Unable to update browser storage.");
                return;
            }

            renderHistory();
        }
    });
}

// Clear complete history
const clearHistoryButton = document.getElementById("clearHistory");

if (clearHistoryButton) {

    clearHistoryButton.addEventListener("click", () => {

        const history = getReportHistory();

        if (history.length === 0) return;

        const confirmed = confirm(
            "Are you sure you want to delete all diagnostic reports?"
        );

        if (!confirmed) return;

        localStorage.removeItem(HISTORY_KEY);

        renderHistory();
    });
}

// Load history when page opens
renderHistory();


// =====================================
// PC FIX AI - SERVICE CENTER
// =====================================

const repairForm = document.getElementById("repairForm");
const repairList = document.getElementById("repairList");

const REPAIRS_KEY = "pcFixRepairs";

function getRepairs() {
    try {
        const saved = JSON.parse(localStorage.getItem(REPAIRS_KEY) || "[]");
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

let repairs = getRepairs();

// Escape text to prevent HTML injection
function escapeRepairText(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

// Display saved repairs
function displayRepairs() {
    if (!repairList) {
        updateServiceDashboard();
        return;
    }

    if (!repairs.length) {
        repairList.innerHTML = "<p>No repairs registered yet.</p>";
        updateServiceDashboard();
        return;
    }

    repairList.innerHTML = repairs.map(repair => `
        <div class="repair-record">
            <h4>${escapeRepairText(repair.number)} – ${escapeRepairText(repair.customer)}</h4>
            <p><strong>Computer:</strong> ${escapeRepairText(repair.computer)}</p>
            <p><strong>Problem:</strong> ${escapeRepairText(repair.problem)}</p>
            <p><strong>Status:</strong> ${escapeRepairText(repair.status)}</p>
            <p><strong>Cost:</strong> €${escapeRepairText(repair.cost)}</p>

            <button type="button" data-repair-action="edit" data-id="${escapeRepairText(repair.id)}">Edit Repair</button>
            <button type="button" data-repair-action="delete" data-id="${escapeRepairText(repair.id)}">Delete</button>
            <button type="button" data-repair-action="print" data-id="${escapeRepairText(repair.id)}">Print Repair Sheet</button>
        </div>
    `).join("");

    updateServiceDashboard();
}

if (repairList) {
    repairList.addEventListener("click", event => {
        const button = event.target.closest("button[data-repair-action]");
        if (!button) return;

        const { repairAction, id } = button.dataset;
        if (repairAction === "edit") editRepair(id);
        if (repairAction === "delete") deleteRepair(id);
        if (repairAction === "print") printRepair(id);
    });
}

// Save a new repair
if (repairForm) {
    repairForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const repair = {
            id: (typeof crypto !== "undefined" && crypto.randomUUID)
                ? crypto.randomUUID()
                : "repair-" + Date.now() + "-" + Math.random().toString(16).slice(2),
            number: "PCFIX-" + Date.now().toString().slice(-7),
            customer: document.getElementById("customerName").value.trim(),
            phone: document.getElementById("customerPhone").value.trim(),
            computer: document.getElementById("computerModel").value.trim(),
            serial: document.getElementById("serialNumber").value.trim(),
            problem: document.getElementById("problemDescription").value.trim(),
            work: document.getElementById("repairPerformed").value.trim(),
            cost: document.getElementById("repairCost").value || "0",
            status: document.getElementById("repairStatus").value,
            date: new Date().toLocaleString()
        };

        repairs.unshift(repair);

        try {
            localStorage.setItem(REPAIRS_KEY, JSON.stringify(repairs));
        } catch {
            repairs.shift();
            alert("Unable to save the repair in browser storage.");
            return;
        }

        displayRepairs();
        repairForm.reset();

        alert("Repair saved successfully!");
    });
}

// Delete a repair
function deleteRepair(id) {
    if (!confirm("Are you sure you want to delete this repair?")) {
        return;
    }

    repairs = repairs.filter(repair => repair.id !== id);

    try {
        localStorage.setItem(REPAIRS_KEY, JSON.stringify(repairs));
    } catch {
        alert("Unable to save the repair changes in browser storage.");
        return;
    }

    displayRepairs();
}

// Load saved repairs when the page opens
displayRepairs();


function printRepair(id) {
    const repair = repairs.find(item => item.id === id);

    if (!repair) {
        alert("Repair not found!");
        return;
    }

    const safe = escapeRepairText;

    const printWindow = window.open("", "_blank");

    if (!printWindow) {
        alert("Please allow pop-ups for this website.");
        return;
    }

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>PC FIX AI - Repair Sheet</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 35px;
                    color: #222;
                }

                .header {
                    text-align: center;
                    border-bottom: 3px solid #2563eb;
                    padding-bottom: 20px;
                    margin-bottom: 25px;
                }

                h1 {
                    color: #2563eb;
                    margin-bottom: 5px;
                }

                .number {
                    font-size: 20px;
                    font-weight: bold;
                    margin: 20px 0;
                }

                .section {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 15px;
                    margin-bottom: 18px;
                }

                .section h3 {
                    color: #2563eb;
                    margin-top: 0;
                }

                .footer {
                    margin-top: 45px;
                    display: flex;
                    justify-content: space-between;
                }

                @media print {
                    button { display: none; }
                }
            </style>
        </head>

        <body>
            <div class="header">
                <h1>PC FIX AI</h1>
                <p>Professional Computer Repair Service</p>
            </div>

            <div class="number">
                Repair Number: ${safe(repair.number)}
            </div>

            <div class="section">
                <h3>Customer Information</h3>
                <p><strong>Name:</strong> ${safe(repair.customer)}</p>
                <p><strong>Phone:</strong> ${safe(repair.phone)}</p>
            </div>

            <div class="section">
                <h3>Computer Information</h3>
                <p><strong>Model:</strong> ${safe(repair.computer)}</p>
                <p><strong>Serial Number:</strong> ${safe(repair.serial)}</p>
            </div>

            <div class="section">
                <h3>Repair Details</h3>
                <p><strong>Problem:</strong> ${safe(repair.problem)}</p>
                <p><strong>Work Performed:</strong> ${safe(repair.work)}</p>
                <p><strong>Status:</strong> ${safe(repair.status)}</p>
                <p><strong>Date:</strong> ${safe(repair.date)}</p>
            </div>

            <div class="section">
                <h3>Payment</h3>
                <p><strong>Total Cost:</strong> €${safe(repair.cost)}</p>
            </div>

            
<div class="footer">
    <div class="signature">
        <p>Customer Signature</p>
        <canvas id="customerSignature" width="350" height="120"></canvas>
        <button onclick="clearSignature('customerSignature')">Clear</button>
    </div>

    <div class="signature">
        <p>Technician Signature</p>
        <canvas id="technicianSignature" width="350" height="120"></canvas>
        <button onclick="clearSignature('technicianSignature')">Clear</button>
    </div>
</div>

<style>
.signature {
    width: 45%;
    text-align: center;
}
.signature canvas {
    width: 100%;
    height: 120px;
    border: 1px solid #777;
    border-radius: 6px;
    touch-action: none;
}
</style>


<script>
function setupSignature(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    let drawing = false;

    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#111";

    canvas.addEventListener("pointerdown", function(e) {
        drawing = true;
        canvas.setPointerCapture(e.pointerId);
        const rect = canvas.getBoundingClientRect();
        ctx.beginPath();
        ctx.moveTo(
            (e.clientX - rect.left) * canvas.width / rect.width,
            (e.clientY - rect.top) * canvas.height / rect.height
        );
    });

    canvas.addEventListener("pointermove", function(e) {
        if (!drawing) return;

        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(
            (e.clientX - rect.left) * canvas.width / rect.width,
            (e.clientY - rect.top) * canvas.height / rect.height
        );
        ctx.stroke();
    });

    canvas.addEventListener("pointerup", () => drawing = false);
    canvas.addEventListener("pointercancel", () => drawing = false);
}

window.clearSignature = function(id) {
    const canvas = document.getElementById(id);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
};

setupSignature("customerSignature");
setupSignature("technicianSignature");
</script>


            <button onclick="window.print()">Print / Save PDF</button>
        </body>
        </html>
    `);

    printWindow.document.close();
}


function editRepair(id) {
    const repair = repairs.find(item => item.id === id);

    if (!repair) {
        alert("Repair not found!");
        return;
    }

    const customer = prompt("Customer Name:", repair.customer);
    if (customer === null) return;

    const phone = prompt("Phone Number:", repair.phone);
    if (phone === null) return;

    const computer = prompt("Computer Model:", repair.computer);
    if (computer === null) return;

    const serial = prompt("Serial Number:", repair.serial);
    if (serial === null) return;

    const problem = prompt("Problem Description:", repair.problem);
    if (problem === null) return;

    const work = prompt("Repair Performed:", repair.work);
    if (work === null) return;

    const cost = prompt("Repair Cost (€):", repair.cost);
    if (cost === null) return;

    if (cost.trim() !== "" &&
        (!Number.isFinite(Number(cost)) || Number(cost) < 0)) {
        alert("Please enter a valid repair cost.");
        return;
    }

    const status = prompt(
        "Status: Pending, In Progress or Completed",
        repair.status
    );

    if (status === null) return;

    const validStatuses = ["Pending", "In Progress", "Completed"];

    if (!validStatuses.includes(status.trim())) {
        alert("Invalid status!");
        return;
    }

    repair.customer = customer.trim();
    repair.phone = phone.trim();
    repair.computer = computer.trim();
    repair.serial = serial.trim();
    repair.problem = problem.trim();
    repair.work = work.trim();
    repair.cost = cost.trim() || "0";
    repair.status = status.trim();

    try {
        localStorage.setItem(REPAIRS_KEY, JSON.stringify(repairs));
    } catch {
        alert("Unable to save the repair changes in browser storage.");
        return;
    }

    displayRepairs();

    alert("Repair updated successfully!");
}


// =====================================
// SERVICE CENTER - DASHBOARD STATISTICS
// =====================================

function updateServiceDashboard() {
    const total = repairs.length;

    const pending = repairs.filter(
        repair => repair.status === "Pending"
    ).length;

    const inProgress = repairs.filter(
        repair => repair.status === "In Progress"
    ).length;

    const completed = repairs.filter(
        repair => repair.status === "Completed"
    ).length;

    const revenue = repairs
        .filter(repair => repair.status === "Completed")
        .reduce((sum, repair) => {
            const cost = Number(repair.cost);
            return sum + (Number.isFinite(cost) ? cost : 0);
        }, 0);

    const setText = (id, value) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    };

    setText("totalRepairs", total);
    setText("pendingRepairs", pending);
    setText("progressRepairs", inProgress);
    setText("completedRepairs", completed);
    setText("totalRevenue", "€" + revenue.toFixed(2));
}



// CUSTOMER MANAGEMENT

let pcFixCustomers = JSON.parse(
    localStorage.getItem("pcFixCustomers") || "[]"
);


function displayCustomers(searchText = "") {
    const list = document.getElementById("customerList");

    if (!list) return;

    const filtered = pcFixCustomers.filter(customer =>
        `${customer.name} ${customer.phone} ${customer.email}`
            .toLowerCase()
            .includes(searchText.toLowerCase())
    );

    list.innerHTML = "";

    if (filtered.length === 0) {
        list.textContent = "No customers registered yet.";
        return;
    }

    filtered.forEach(customer => {
        const card = document.createElement("div");
        card.className = "customer-card";

        const name = document.createElement("h3");
        name.textContent = customer.name;

        const phone = document.createElement("p");
        phone.textContent = "Phone: " + customer.phone;

        const email = document.createElement("p");
        email.textContent = "Email: " + (customer.email || "");

        const address = document.createElement("p");
        address.textContent = "Address: " + (customer.address || "");

        const actions = document.createElement("div");
        actions.className = "customer-actions";

        const editButton = document.createElement("button");
        editButton.type = "button";
        editButton.textContent = "Edit";
        editButton.className = "customer-edit";

        editButton.addEventListener("click", function () {
            const index = pcFixCustomers.indexOf(customer);
            if (index === -1) return;

            const newName = prompt("Customer name:", customer.name);
            if (newName === null) return;

            const newPhone = prompt("Phone number:", customer.phone);
            if (newPhone === null) return;

            const newEmail = prompt("Email address:", customer.email || "");
            if (newEmail === null) return;

            const newAddress = prompt("Address:", customer.address || "");
            if (newAddress === null) return;

            if (!newName.trim() || !newPhone.trim()) {
                alert("Name and phone number are required.");
                return;
            }

            pcFixCustomers[index] = {
                ...customer,
                name: newName.trim(),
                phone: newPhone.trim(),
                email: newEmail.trim(),
                address: newAddress.trim()
            };

            localStorage.setItem(
                "pcFixCustomers",
                JSON.stringify(pcFixCustomers)
            );

            displayCustomers(searchText);
            alert("Customer updated successfully!");
        });

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.className = "customer-delete";

        deleteButton.addEventListener("click", function () {
            const confirmed = confirm(
                "Are you sure you want to delete " + customer.name + "?"
            );

            if (!confirmed) return;

            pcFixCustomers = pcFixCustomers.filter(
                item => item !== customer
            );

            localStorage.setItem(
                "pcFixCustomers",
                JSON.stringify(pcFixCustomers)
            );

            displayCustomers(searchText);
        });

        actions.append(editButton, deleteButton);
        card.append(name, phone, email, address, actions);
        list.appendChild(card);
    });
}


const pcCustomerForm = document.getElementById("customerForm");

if (pcCustomerForm) {
    pcCustomerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("newCustomerName").value.trim();
        const phone = document.getElementById("newCustomerPhone").value.trim();
        const email = document.getElementById("newCustomerEmail").value.trim();
        const address = document.getElementById("newCustomerAddress").value.trim();

        if (!name || !phone) {
            alert("Please enter customer name and phone number.");
            return;
        }

        pcFixCustomers.push({
            id: Date.now(),
            name,
            phone,
            email,
            address
        });

        localStorage.setItem(
            "pcFixCustomers",
            JSON.stringify(pcFixCustomers)
        );

        pcCustomerForm.reset();
        displayCustomers();

        alert("Customer saved successfully!");
    });
}

const pcCustomerSearch = document.getElementById("customerSearch");

if (pcCustomerSearch) {
    pcCustomerSearch.addEventListener("input", function() {
        displayCustomers(this.value);
    });
}

displayCustomers();
