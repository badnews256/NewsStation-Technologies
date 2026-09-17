// ======================================================
// NEWSOS AUDIT LOG ENGINE
// ======================================================

const AuditLog = {

    entries: [],

    maxEntries: 500,

    // ==================================================
    // RECORD AUDIT ENTRY
    // ==================================================

    record(action, details = "", module = "System") {

        if (!action) return;

        const entry = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            module,
            action,
            details
        };

        this.entries.unshift(entry);

        if (this.entries.length > this.maxEntries) {
            this.entries.pop();
        }

        console.log("Audit Log:", entry);

        return entry;
    },

    // ==================================================
    // GET ALL ENTRIES
    // ==================================================

    getAll() {

        return [...this.entries];

    },

    // ==================================================
    // GET RECENT ENTRIES
    // ==================================================

    getRecent(limit = 5) {

        return this.entries.slice(0, limit);

    },

    // ==================================================
    // CLEAR LOG
    // ==================================================

    clear() {

        this.entries = [];

    }

};

console.log("NewsOS Audit Log Engine initialized.");