<?php
/**
 * OperationStatusTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentInbound\OperationStatus;

/**
 * OperationStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of an operation.
 * @package     OpenAPI\Client
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
