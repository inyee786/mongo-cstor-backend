
const express = require('express');
const router = express();

router.get('/yaml', (req, res) => {
    res.status(200).json({ 
        status: 200, 
        workloadName: "mongo",
        nameSpaceyaml: "https://github.com/openebs/e2e-infrastructure/blob/816ae44f1bd9c886ce506a72b542edcb323a50b3/production/mongo-cstor/mongo-cstor-namespace.yaml",
        workloadyaml:"https://github.com/openebs/e2e-infrastructure/blob/816ae44f1bd9c886ce506a72b542edcb323a50b3/production/mongo-cstor/mongo-cstor-mongo.yaml"
 });
});



module.exports = router;