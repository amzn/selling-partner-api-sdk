<?php
/**
 * TransactionIdentifierTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\invoices\v2024_06_19\TransactionIdentifier;

/**
 * TransactionIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description The identifier for a transaction.
 * @package     SpApi
 */
class TransactionIdentifierTest extends TestCase
{

    private TransactionIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionIdentifier"
     */
    public function testTransactionIdentifier()
    {
        $this->assertInstanceOf(TransactionIdentifier::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "id"
     */
    public function testPropertyId()
    {
        $testValue = 'test';
        
        $this->model->setId($testValue);
        $this->assertEquals($testValue, $this->model->getId());
    }
}
