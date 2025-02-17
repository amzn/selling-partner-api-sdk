<?php
/**
 * OperationStatusTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\OperationStatus;

/**
 * OperationStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of an operation.
 * @package     SpApi
 */
class OperationStatusTest extends TestCase
{

    private OperationStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OperationStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OperationStatus"
     */
    public function testOperationStatus()
    {
        $this->assertInstanceOf(OperationStatus::class, $this->model);
    }
}
