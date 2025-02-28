<?php
/**
 * DetailCodesTest
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
use SpApi\Model\shipping\v2\DetailCodes;

/**
 * DetailCodesTest Class Doc Comment
 *
 * @category    Class
 * @description A list of codes used to provide additional shipment information.
 * @package     SpApi
 */
class DetailCodesTest extends TestCase
{

    private DetailCodes $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DetailCodes();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DetailCodes"
     */
    public function testDetailCodes()
    {
        $this->assertInstanceOf(DetailCodes::class, $this->model);
    }
}
