<?php
/**
 * PackageStatusTest
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
use OpenAPI\Client\Model\easyship\PackageStatus;

/**
 * PackageStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The status of the package.
 * @package     OpenAPI\Client
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
