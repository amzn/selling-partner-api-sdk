<?php
/**
 * SupplySourceStatusTest
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
use SpApi\Model\supplySources\v2020_07_01\SupplySourceStatus;

/**
 * SupplySourceStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;SupplySource&#x60; status
 * @package     SpApi
 */
class SupplySourceStatusTest extends TestCase
{

    private SupplySourceStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SupplySourceStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SupplySourceStatus"
     */
    public function testSupplySourceStatus()
    {
        $this->assertInstanceOf(SupplySourceStatus::class, $this->model);
    }
}
