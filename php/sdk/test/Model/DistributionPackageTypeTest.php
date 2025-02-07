<?php
/**
 * DistributionPackageTypeTest
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
use OpenAPI\Client\Model\awd\v2024_05_09\DistributionPackageType;

/**
 * DistributionPackageTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Type of distribution packages.
 * @package     OpenAPI\Client
 */
class DistributionPackageTypeTest extends TestCase
{

    private DistributionPackageType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DistributionPackageType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DistributionPackageType"
     */
    public function testDistributionPackageType()
    {
        $this->assertInstanceOf(DistributionPackageType::class, $this->model);
    }
}
