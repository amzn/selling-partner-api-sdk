<?php
/**
 * PackageStatusTest
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
use SpApi\Model\easyship\v2022_03_23\PackageStatus;

/**
 * PackageStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the package.
 * @package     SpApi
 */
class PackageStatusTest extends TestCase
{

    private PackageStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageStatus"
     */
    public function testPackageStatus()
    {
        $this->assertInstanceOf(PackageStatus::class, $this->model);
    }
}
