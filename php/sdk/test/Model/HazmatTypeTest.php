<?php
/**
 * HazmatTypeTest
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
use SpApi\Model\merchantFulfillment\v0\HazmatType;

/**
 * HazmatTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Hazardous materials options for a package. Consult the terms and conditions for each carrier for more information on hazardous materials.
 * @package     SpApi
 */
class HazmatTypeTest extends TestCase
{

    private HazmatType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new HazmatType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "HazmatType"
     */
    public function testHazmatType()
    {
        $this->assertInstanceOf(HazmatType::class, $this->model);
    }
}
