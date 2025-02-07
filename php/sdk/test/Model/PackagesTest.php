<?php
/**
 * PackagesTest
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
use OpenAPI\Client\Model\easyship\v2022_03_23\Packages;

/**
 * PackagesTest Class Doc Comment
 *
 * @category    Class
 * @description A list of packages.
 * @package     OpenAPI\Client
 */
class PackagesTest extends TestCase
{

    private Packages $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Packages();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Packages"
     */
    public function testPackages()
    {
        $this->assertInstanceOf(Packages::class, $this->model);
    }

    /**
     * Test attribute "packages"
     */
    public function testPropertyPackages()
    {
        $testValue = [];
        
        $this->model->setPackages($testValue);
        $this->assertEquals($testValue, $this->model->getPackages());
    }
}
