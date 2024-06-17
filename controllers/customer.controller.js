const Customer = require('../models/customer.model');

const getCustomers = async (_, res) => {
    try {
        const customers = await Customer.find({});
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findById(id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCustomer = async (req, res) => {
    try {
        const customer = await Customer.create(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body, { new: true });

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndDelete(id);

        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCustomers,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
