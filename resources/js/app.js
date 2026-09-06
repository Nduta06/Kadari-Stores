// Livewire already bundles and starts Alpine.js — importing/starting it again
// here causes a "multiple instances of Alpine" conflict where x-data state
// (e.g. the modal component) stops reacting to Livewire updates.
