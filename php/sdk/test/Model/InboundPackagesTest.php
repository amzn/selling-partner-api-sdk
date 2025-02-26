<?php
/**
 * InboundPackagesTest
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
use SpApi\Model\awd\v2024_05_09\InboundPackages;

/**
 * InboundPackagesTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the packages to inbound.
 * @package     SpApi
 */
class InboundPackagesTest extends TestCase
{

    private InboundPackages $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundPackages();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundPackages"
     */
    public function testInboundPackages()
    {
        $this->assertInstanceOf(InboundPackages::class, $this->model);
    }

    /**
     * Test attribute "packages_to_inbound"
     */
    public function testPropertyPackagesToInbound()
    {
        $testValue = [];
        
        $this->model->setPackagesToInbound($testValue);
        $this->assertEquals($testValue, $this->model->getPackagesToInbound());
    }
}
