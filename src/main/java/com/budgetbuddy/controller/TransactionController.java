package com.budgetbuddy.controller;

import com.budgetbuddy.entity.Transaction;
import com.budgetbuddy.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/transactions")
public class TransactionController {
    @Autowired
    private TransactionService service;

    @GetMapping
    public List<Transaction> getTransactions() {
        return service.getAllTransactions();
    }

    @PostMapping
    public Transaction createTransaction(@RequestBody Transaction transaction) {
        return service.saveTransaction(transaction);
    }
}