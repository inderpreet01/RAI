const jobVacancySchema = new mongoose.Schema({
    position: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    }
});

const JobVacancy = mongoose.model('JobVacancy', jobVacancySchema);

