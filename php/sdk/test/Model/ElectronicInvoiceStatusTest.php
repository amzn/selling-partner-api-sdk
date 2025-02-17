<?php
/**
 * ElectronicInvoiceStatusTest
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
use SpApi\Model\orders\v0\ElectronicInvoiceStatus;

/**
 * ElectronicInvoiceStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the electronic invoice. Only available for Easy Ship orders and orders in the BR marketplace.
 * @package     SpApi
 */
class ElectronicInvoiceStatusTest extends TestCase
{

    private ElectronicInvoiceStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ElectronicInvoiceStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ElectronicInvoiceStatus"
     */
    public function testElectronicInvoiceStatus()
    {
        $this->assertInstanceOf(ElectronicInvoiceStatus::class, $this->model);
    }
}
