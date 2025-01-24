<?php
/**
 * UnitOfWeightTest
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
use OpenAPI\Client\Model\easyship\UnitOfWeight;

/**
 * UnitOfWeightTest Class Doc Comment
 *
 * @category    Class
 * @description The unit of measurement used to measure the weight.
 * @package     OpenAPI\Client
 */
class UnitOfWeightTest extends TestCase
{

    private UnitOfWeight $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new UnitOfWeight();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "UnitOfWeight"
     */
    public function testUnitOfWeight()
    {
        $this->assertInstanceOf(UnitOfWeight::class, $this->model);
    }
}
