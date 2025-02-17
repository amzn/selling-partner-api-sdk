<?php
/**
 * AccessPointTypeTest
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
use SpApi\Model\shipping\v2\AccessPointType;

/**
 * AccessPointTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of access point, like counter (HELIX), lockers, etc.
 * @package     SpApi
 */
class AccessPointTypeTest extends TestCase
{

    private AccessPointType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AccessPointType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AccessPointType"
     */
    public function testAccessPointType()
    {
        $this->assertInstanceOf(AccessPointType::class, $this->model);
    }
}
