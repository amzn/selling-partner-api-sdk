<?php
/**
 * CapacityTypeTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\services\v1\CapacityType;

/**
 * CapacityTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of capacity
 * @package     OpenAPI\Client
 */
class CapacityTypeTest extends TestCase
{

    private CapacityType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CapacityType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CapacityType"
     */
    public function testCapacityType()
    {
        $this->assertInstanceOf(CapacityType::class, $this->model);
    }
}
